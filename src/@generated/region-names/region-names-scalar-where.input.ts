import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class region_namesScalarWhereInput {

    @Field(() => [region_namesScalarWhereInput], {nullable:true})
    AND?: Array<region_namesScalarWhereInput>;

    @Field(() => [region_namesScalarWhereInput], {nullable:true})
    OR?: Array<region_namesScalarWhereInput>;

    @Field(() => [region_namesScalarWhereInput], {nullable:true})
    NOT?: Array<region_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    region_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
