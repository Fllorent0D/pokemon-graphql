import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class item_pocket_namesScalarWhereInput {

    @Field(() => [item_pocket_namesScalarWhereInput], {nullable:true})
    AND?: Array<item_pocket_namesScalarWhereInput>;

    @Field(() => [item_pocket_namesScalarWhereInput], {nullable:true})
    OR?: Array<item_pocket_namesScalarWhereInput>;

    @Field(() => [item_pocket_namesScalarWhereInput], {nullable:true})
    NOT?: Array<item_pocket_namesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_pocket_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
