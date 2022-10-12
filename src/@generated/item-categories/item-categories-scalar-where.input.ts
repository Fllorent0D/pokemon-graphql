import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class item_categoriesScalarWhereInput {

    @Field(() => [item_categoriesScalarWhereInput], {nullable:true})
    AND?: Array<item_categoriesScalarWhereInput>;

    @Field(() => [item_categoriesScalarWhereInput], {nullable:true})
    OR?: Array<item_categoriesScalarWhereInput>;

    @Field(() => [item_categoriesScalarWhereInput], {nullable:true})
    NOT?: Array<item_categoriesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pocket_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;
}
