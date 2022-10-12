import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_meta_ailmentsOrderByWithRelationInput } from '../move-meta-ailments/move-meta-ailments-order-by-with-relation.input';
import { move_meta_categoriesOrderByWithRelationInput } from '../move-meta-categories/move-meta-categories-order-by-with-relation.input';
import { movesOrderByWithRelationInput } from '../moves/moves-order-by-with-relation.input';

@InputType()
export class move_metaOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meta_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meta_ailment_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    min_hits?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_hits?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    min_turns?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_turns?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recoil?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    healing?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    crit_rate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ailment_chance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flinch_chance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stat_chance?: keyof typeof SortOrder;

    @Field(() => move_meta_ailmentsOrderByWithRelationInput, {nullable:true})
    move_meta_ailments?: move_meta_ailmentsOrderByWithRelationInput;

    @Field(() => move_meta_categoriesOrderByWithRelationInput, {nullable:true})
    move_meta_categories?: move_meta_categoriesOrderByWithRelationInput;

    @Field(() => movesOrderByWithRelationInput, {nullable:true})
    moves?: movesOrderByWithRelationInput;
}
