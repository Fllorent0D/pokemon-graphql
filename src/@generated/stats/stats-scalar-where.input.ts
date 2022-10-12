import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class statsScalarWhereInput {

    @Field(() => [statsScalarWhereInput], {nullable:true})
    AND?: Array<statsScalarWhereInput>;

    @Field(() => [statsScalarWhereInput], {nullable:true})
    OR?: Array<statsScalarWhereInput>;

    @Field(() => [statsScalarWhereInput], {nullable:true})
    NOT?: Array<statsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    damage_class_id?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_battle_only?: BoolFilter;
}
