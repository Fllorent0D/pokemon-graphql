import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_damage_classesWhereInput } from '../move-damage-classes/move-damage-classes-where.input';
import { Type } from 'class-transformer';
import { move_damage_classesOrderByWithRelationInput } from '../move-damage-classes/move-damage-classes-order-by-with-relation.input';
import { move_damage_classesWhereUniqueInput } from '../move-damage-classes/move-damage-classes-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatemoveDamageClassesArgs {

    @Field(() => move_damage_classesWhereInput, {nullable:true})
    @Type(() => move_damage_classesWhereInput)
    where?: move_damage_classesWhereInput;

    @Field(() => [move_damage_classesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_damage_classesOrderByWithRelationInput>;

    @Field(() => move_damage_classesWhereUniqueInput, {nullable:true})
    cursor?: move_damage_classesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
