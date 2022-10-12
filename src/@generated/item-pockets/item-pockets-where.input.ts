import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Item_categoriesListRelationFilter } from '../prisma/item-categories-list-relation-filter.input';
import { Item_pocket_namesListRelationFilter } from '../prisma/item-pocket-names-list-relation-filter.input';

@InputType()
export class item_pocketsWhereInput {

    @Field(() => [item_pocketsWhereInput], {nullable:true})
    AND?: Array<item_pocketsWhereInput>;

    @Field(() => [item_pocketsWhereInput], {nullable:true})
    OR?: Array<item_pocketsWhereInput>;

    @Field(() => [item_pocketsWhereInput], {nullable:true})
    NOT?: Array<item_pocketsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Item_categoriesListRelationFilter, {nullable:true})
    item_categories?: Item_categoriesListRelationFilter;

    @Field(() => Item_pocket_namesListRelationFilter, {nullable:true})
    item_pocket_names?: Item_pocket_namesListRelationFilter;
}
