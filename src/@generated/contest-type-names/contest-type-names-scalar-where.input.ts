import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class contest_type_namesScalarWhereInput {

    @Field(() => [contest_type_namesScalarWhereInput], {nullable:true})
    AND?: Array<contest_type_namesScalarWhereInput>;

    @Field(() => [contest_type_namesScalarWhereInput], {nullable:true})
    OR?: Array<contest_type_namesScalarWhereInput>;

    @Field(() => [contest_type_namesScalarWhereInput], {nullable:true})
    NOT?: Array<contest_type_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    contest_type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    flavor?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    color?: StringNullableFilter;
}
