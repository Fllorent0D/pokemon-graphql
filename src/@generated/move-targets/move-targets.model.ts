import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { move_target_prose } from '../move-target-prose/move-target-prose.model';
import { moves } from '../moves/moves.model';
import { Move_targetsCount } from '../prisma/move-targets-count.output';

@ObjectType()
export class move_targets {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [move_target_prose], {nullable:true})
    move_target_prose?: Array<move_target_prose>;

    @Field(() => [moves], {nullable:true})
    moves?: Array<moves>;

    @Field(() => Move_targetsCount, {nullable:false})
    _count?: Move_targetsCount;
}
