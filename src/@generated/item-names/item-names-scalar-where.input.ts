import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class item_namesScalarWhereInput {

    @Field(() => [item_namesScalarWhereInput], {nullable:true})
    AND?: Array<item_namesScalarWhereInput>;

    @Field(() => [item_namesScalarWhereInput], {nullable:true})
    OR?: Array<item_namesScalarWhereInput>;

    @Field(() => [item_namesScalarWhereInput], {nullable:true})
    NOT?: Array<item_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
