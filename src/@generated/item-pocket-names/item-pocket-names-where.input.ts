import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Item_pocketsRelationFilter } from '../prisma/item-pockets-relation-filter.input';

@InputType()
export class item_pocket_namesWhereInput {

    @Field(() => [item_pocket_namesWhereInput], {nullable:true})
    AND?: Array<item_pocket_namesWhereInput>;

    @Field(() => [item_pocket_namesWhereInput], {nullable:true})
    OR?: Array<item_pocket_namesWhereInput>;

    @Field(() => [item_pocket_namesWhereInput], {nullable:true})
    NOT?: Array<item_pocket_namesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_pocket_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Item_pocketsRelationFilter, {nullable:true})
    item_pockets?: Item_pocketsRelationFilter;
}
