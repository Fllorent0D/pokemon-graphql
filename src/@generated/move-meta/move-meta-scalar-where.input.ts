import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class move_metaScalarWhereInput {

    @Field(() => [move_metaScalarWhereInput], {nullable:true})
    AND?: Array<move_metaScalarWhereInput>;

    @Field(() => [move_metaScalarWhereInput], {nullable:true})
    OR?: Array<move_metaScalarWhereInput>;

    @Field(() => [move_metaScalarWhereInput], {nullable:true})
    NOT?: Array<move_metaScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    meta_category_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    meta_ailment_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    min_hits?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    max_hits?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    min_turns?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    max_turns?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    recoil?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    healing?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    crit_rate?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    ailment_chance?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    flinch_chance?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    stat_chance?: IntFilter;
}
