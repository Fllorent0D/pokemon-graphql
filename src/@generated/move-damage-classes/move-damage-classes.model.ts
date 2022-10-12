import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { move_damage_class_prose } from '../move-damage-class-prose/move-damage-class-prose.model';
import { moves } from '../moves/moves.model';
import { stats } from '../stats/stats.model';
import { types } from '../types/types.model';
import { Move_damage_classesCount } from '../prisma/move-damage-classes-count.output';

@ObjectType()
export class move_damage_classes {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [move_damage_class_prose], {nullable:true})
    move_damage_class_prose?: Array<move_damage_class_prose>;

    @Field(() => [moves], {nullable:true})
    moves?: Array<moves>;

    @Field(() => [stats], {nullable:true})
    stats?: Array<stats>;

    @Field(() => [types], {nullable:true})
    types?: Array<types>;

    @Field(() => Move_damage_classesCount, {nullable:false})
    _count?: Move_damage_classesCount;
}
