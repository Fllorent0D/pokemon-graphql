import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { TypesRelationFilter } from '../prisma/types-relation-filter.input';

@InputType()
export class type_efficacyWhereInput {

    @Field(() => [type_efficacyWhereInput], {nullable:true})
    AND?: Array<type_efficacyWhereInput>;

    @Field(() => [type_efficacyWhereInput], {nullable:true})
    OR?: Array<type_efficacyWhereInput>;

    @Field(() => [type_efficacyWhereInput], {nullable:true})
    NOT?: Array<type_efficacyWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    damage_type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    target_type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    damage_factor?: IntFilter;

    @Field(() => TypesRelationFilter, {nullable:true})
    types_type_efficacy_target_type_idTotypes?: TypesRelationFilter;

    @Field(() => TypesRelationFilter, {nullable:true})
    types_type_efficacy_damage_type_idTotypes?: TypesRelationFilter;
}
