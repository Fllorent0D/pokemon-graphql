import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class type_namesScalarWhereInput {

    @Field(() => [type_namesScalarWhereInput], {nullable:true})
    AND?: Array<type_namesScalarWhereInput>;

    @Field(() => [type_namesScalarWhereInput], {nullable:true})
    OR?: Array<type_namesScalarWhereInput>;

    @Field(() => [type_namesScalarWhereInput], {nullable:true})
    NOT?: Array<type_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
