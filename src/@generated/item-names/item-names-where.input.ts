import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { ItemsRelationFilter } from '../prisma/items-relation-filter.input';

@InputType()
export class item_namesWhereInput {

    @Field(() => [item_namesWhereInput], {nullable:true})
    AND?: Array<item_namesWhereInput>;

    @Field(() => [item_namesWhereInput], {nullable:true})
    OR?: Array<item_namesWhereInput>;

    @Field(() => [item_namesWhereInput], {nullable:true})
    NOT?: Array<item_namesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => ItemsRelationFilter, {nullable:true})
    items?: ItemsRelationFilter;
}
