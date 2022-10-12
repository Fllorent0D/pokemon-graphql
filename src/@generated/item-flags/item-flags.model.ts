import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { item_flag_map } from '../item-flag-map/item-flag-map.model';
import { item_flag_prose } from '../item-flag-prose/item-flag-prose.model';
import { Item_flagsCount } from '../prisma/item-flags-count.output';

@ObjectType()
export class item_flags {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [item_flag_map], {nullable:true})
    item_flag_map?: Array<item_flag_map>;

    @Field(() => [item_flag_prose], {nullable:true})
    item_flag_prose?: Array<item_flag_prose>;

    @Field(() => Item_flagsCount, {nullable:false})
    _count?: Item_flagsCount;
}
