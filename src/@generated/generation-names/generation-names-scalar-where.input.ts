import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class generation_namesScalarWhereInput {

    @Field(() => [generation_namesScalarWhereInput], {nullable:true})
    AND?: Array<generation_namesScalarWhereInput>;

    @Field(() => [generation_namesScalarWhereInput], {nullable:true})
    OR?: Array<generation_namesScalarWhereInput>;

    @Field(() => [generation_namesScalarWhereInput], {nullable:true})
    NOT?: Array<generation_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
