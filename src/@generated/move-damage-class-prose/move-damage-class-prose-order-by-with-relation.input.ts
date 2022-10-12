import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesOrderByWithRelationInput } from '../languages/languages-order-by-with-relation.input';
import { move_damage_classesOrderByWithRelationInput } from '../move-damage-classes/move-damage-classes-order-by-with-relation.input';

@InputType()
export class move_damage_class_proseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    move_damage_class_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => languagesOrderByWithRelationInput, {nullable:true})
    languages?: languagesOrderByWithRelationInput;

    @Field(() => move_damage_classesOrderByWithRelationInput, {nullable:true})
    move_damage_classes?: move_damage_classesOrderByWithRelationInput;
}
