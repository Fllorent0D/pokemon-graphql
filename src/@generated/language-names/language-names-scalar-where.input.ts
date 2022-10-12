import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class language_namesScalarWhereInput {

    @Field(() => [language_namesScalarWhereInput], {nullable:true})
    AND?: Array<language_namesScalarWhereInput>;

    @Field(() => [language_namesScalarWhereInput], {nullable:true})
    OR?: Array<language_namesScalarWhereInput>;

    @Field(() => [language_namesScalarWhereInput], {nullable:true})
    NOT?: Array<language_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    language_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
