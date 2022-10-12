import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class encounter_slotsScalarWhereInput {

    @Field(() => [encounter_slotsScalarWhereInput], {nullable:true})
    AND?: Array<encounter_slotsScalarWhereInput>;

    @Field(() => [encounter_slotsScalarWhereInput], {nullable:true})
    OR?: Array<encounter_slotsScalarWhereInput>;

    @Field(() => [encounter_slotsScalarWhereInput], {nullable:true})
    NOT?: Array<encounter_slotsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    encounter_method_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    slot?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    rarity?: IntNullableFilter;
}
