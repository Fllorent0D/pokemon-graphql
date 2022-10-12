import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_group_regionsVersion_group_idRegion_idCompoundUniqueInput } from './version-group-regions-version-group-id-region-id-compound-unique.input';

@InputType()
export class version_group_regionsWhereUniqueInput {

    @Field(() => version_group_regionsVersion_group_idRegion_idCompoundUniqueInput, {nullable:true})
    version_group_id_region_id?: version_group_regionsVersion_group_idRegion_idCompoundUniqueInput;
}
