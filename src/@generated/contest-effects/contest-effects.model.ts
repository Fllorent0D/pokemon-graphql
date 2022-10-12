import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { contest_effect_prose } from '../contest-effect-prose/contest-effect-prose.model';
import { moves } from '../moves/moves.model';
import { Contest_effectsCount } from '../prisma/contest-effects-count.output';

@ObjectType()
export class contest_effects {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => [contest_effect_prose], {nullable:true})
    contest_effect_prose?: Array<contest_effect_prose>;

    @Field(() => [moves], {nullable:true})
    moves?: Array<moves>;

    @Field(() => Contest_effectsCount, {nullable:false})
    _count?: Contest_effectsCount;
}
