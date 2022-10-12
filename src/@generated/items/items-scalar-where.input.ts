import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class itemsScalarWhereInput {

    @Field(() => [itemsScalarWhereInput], {nullable:true})
    AND?: Array<itemsScalarWhereInput>;

    @Field(() => [itemsScalarWhereInput], {nullable:true})
    OR?: Array<itemsScalarWhereInput>;

    @Field(() => [itemsScalarWhereInput], {nullable:true})
    NOT?: Array<itemsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    category_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    cost?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fling_power?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fling_effect_id?: IntNullableFilter;
}
