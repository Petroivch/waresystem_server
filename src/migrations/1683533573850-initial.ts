import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1683533573850 implements MigrationInterface {
    name = 'Initial1683533573850'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "invoice_warehouse" ("WareId" integer NOT NULL, "warehouse_Id" integer NOT NULL, CONSTRAINT "PK_b67a04a7d9950e362bd4c8828b6" PRIMARY KEY ("WareId", "warehouse_Id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_215a07e3102bdbcd16243515b4" ON "invoice_warehouse" ("WareId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2df0a304fee3b0dc58cbb4d3c3" ON "invoice_warehouse" ("warehouse_Id") `);
        await queryRunner.query(`CREATE TABLE "invoice_product" ("ProductId" integer NOT NULL, "product_Id" integer NOT NULL, CONSTRAINT "PK_110ff531537191456eb2ea766d7" PRIMARY KEY ("ProductId", "product_Id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_883fed82fb244ae2c228397e3f" ON "invoice_product" ("ProductId") `);
        await queryRunner.query(`CREATE INDEX "IDX_72ad00ea93ad7646020ab3ac7b" ON "invoice_product" ("product_Id") `);
        await queryRunner.query(`CREATE TABLE "invoice_user" ("UserId" integer NOT NULL, "user_Id" integer NOT NULL, CONSTRAINT "PK_b67429160192357ad599f24f4bc" PRIMARY KEY ("UserId", "user_Id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_55abb66ff57e75bb31059aaf5a" ON "invoice_user" ("UserId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b736dd02ff09f57f6c70cfb705" ON "invoice_user" ("user_Id") `);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "AmountOnWare"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "WareId"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "Image"`);
        await queryRunner.query(`ALTER TABLE "warehouse" DROP COLUMN "WareName"`);
        await queryRunner.query(`ALTER TABLE "warehouse" ADD "WareName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "warehouse" DROP COLUMN "WareAddress"`);
        await queryRunner.query(`ALTER TABLE "warehouse" ADD "WareAddress" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "ProductName"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "ProductName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "ProductType"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "ProductType" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "Cost"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "Cost" integer NOT NULL`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "invoice_Id_seq" OWNED BY "invoice"."Id"`);
        await queryRunner.query(`ALTER TABLE "invoice" ALTER COLUMN "Id" SET DEFAULT nextval('"invoice_Id_seq"')`);
        await queryRunner.query(`ALTER TABLE "invoice" DROP COLUMN "Date"`);
        await queryRunner.query(`ALTER TABLE "invoice" ADD "Date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "invoice" ALTER COLUMN "UserId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "invoice" ALTER COLUMN "WareId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "invoice" ALTER COLUMN "ProductId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "invoice" DROP COLUMN "ProductCount"`);
        await queryRunner.query(`ALTER TABLE "invoice" ADD "ProductCount" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "invoice" DROP COLUMN "TypeOfOrder"`);
        await queryRunner.query(`ALTER TABLE "invoice" ADD "TypeOfOrder" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "UserName"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "UserName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "UserAddress"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "UserAddress" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "invoice_warehouse" ADD CONSTRAINT "FK_215a07e3102bdbcd16243515b48" FOREIGN KEY ("WareId") REFERENCES "invoice"("Id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "invoice_warehouse" ADD CONSTRAINT "FK_2df0a304fee3b0dc58cbb4d3c3d" FOREIGN KEY ("warehouse_Id") REFERENCES "warehouse"("Id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "invoice_product" ADD CONSTRAINT "FK_883fed82fb244ae2c228397e3fa" FOREIGN KEY ("ProductId") REFERENCES "invoice"("Id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "invoice_product" ADD CONSTRAINT "FK_72ad00ea93ad7646020ab3ac7b0" FOREIGN KEY ("product_Id") REFERENCES "product"("Id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "invoice_user" ADD CONSTRAINT "FK_55abb66ff57e75bb31059aaf5ae" FOREIGN KEY ("UserId") REFERENCES "invoice"("Id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "invoice_user" ADD CONSTRAINT "FK_b736dd02ff09f57f6c70cfb7058" FOREIGN KEY ("user_Id") REFERENCES "product"("Id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoice_user" DROP CONSTRAINT "FK_b736dd02ff09f57f6c70cfb7058"`);
        await queryRunner.query(`ALTER TABLE "invoice_user" DROP CONSTRAINT "FK_55abb66ff57e75bb31059aaf5ae"`);
        await queryRunner.query(`ALTER TABLE "invoice_product" DROP CONSTRAINT "FK_72ad00ea93ad7646020ab3ac7b0"`);
        await queryRunner.query(`ALTER TABLE "invoice_product" DROP CONSTRAINT "FK_883fed82fb244ae2c228397e3fa"`);
        await queryRunner.query(`ALTER TABLE "invoice_warehouse" DROP CONSTRAINT "FK_2df0a304fee3b0dc58cbb4d3c3d"`);
        await queryRunner.query(`ALTER TABLE "invoice_warehouse" DROP CONSTRAINT "FK_215a07e3102bdbcd16243515b48"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "UserAddress"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "UserAddress" character varying(128)`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "UserName"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "UserName" character varying(128)`);
        await queryRunner.query(`ALTER TABLE "invoice" DROP COLUMN "TypeOfOrder"`);
        await queryRunner.query(`ALTER TABLE "invoice" ADD "TypeOfOrder" integer`);
        await queryRunner.query(`ALTER TABLE "invoice" DROP COLUMN "ProductCount"`);
        await queryRunner.query(`ALTER TABLE "invoice" ADD "ProductCount" character varying(30)`);
        await queryRunner.query(`ALTER TABLE "invoice" ALTER COLUMN "ProductId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "invoice" ALTER COLUMN "WareId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "invoice" ALTER COLUMN "UserId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "invoice" DROP COLUMN "Date"`);
        await queryRunner.query(`ALTER TABLE "invoice" ADD "Date" date`);
        await queryRunner.query(`ALTER TABLE "invoice" ALTER COLUMN "Id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "invoice_Id_seq"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "Cost"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "Cost" real`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "ProductType"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "ProductType" character varying(128)`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "ProductName"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "ProductName" character varying(128)`);
        await queryRunner.query(`ALTER TABLE "warehouse" DROP COLUMN "WareAddress"`);
        await queryRunner.query(`ALTER TABLE "warehouse" ADD "WareAddress" character varying(128)`);
        await queryRunner.query(`ALTER TABLE "warehouse" DROP COLUMN "WareName"`);
        await queryRunner.query(`ALTER TABLE "warehouse" ADD "WareName" character varying(128)`);
        await queryRunner.query(`ALTER TABLE "product" ADD "Image" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "product" ADD "WareId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD "AmountOnWare" integer`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b736dd02ff09f57f6c70cfb705"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_55abb66ff57e75bb31059aaf5a"`);
        await queryRunner.query(`DROP TABLE "invoice_user"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_72ad00ea93ad7646020ab3ac7b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_883fed82fb244ae2c228397e3f"`);
        await queryRunner.query(`DROP TABLE "invoice_product"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2df0a304fee3b0dc58cbb4d3c3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_215a07e3102bdbcd16243515b4"`);
        await queryRunner.query(`DROP TABLE "invoice_warehouse"`);
    }

}
