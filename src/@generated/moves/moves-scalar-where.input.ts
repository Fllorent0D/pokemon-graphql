import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class movesScalarWhereInput {

    @Field(() => [movesScalarWhereInput], {nullable:true})
    AND?: Array<movesScalarWhereInput>;

    @Field(() => [movesScalarWhereInput], {nullable:true})
    OR?: Array<movesScalarWhereInput>;

    @Field(() => [movesScalarWhereInput], {nullable:true})
    NOT?: Array<movesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    target_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    damage_class_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    effect_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    effect_chance?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    contest_type_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    contest_effect_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    super_contest_effect_id?: IntNullableFilter;
}
