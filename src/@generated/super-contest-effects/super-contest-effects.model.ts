import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { moves } from '../moves/moves.model';
import { super_contest_effect_prose } from '../super-contest-effect-prose/super-contest-effect-prose.model';
import { Super_contest_effectsCount } from '../prisma/super-contest-effects-count.output';

@ObjectType()
export class super_contest_effects {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => [moves], {nullable:true})
    moves?: Array<moves>;

    @Field(() => [super_contest_effect_prose], {nullable:true})
    super_contest_effect_prose?: Array<super_contest_effect_prose>;

    @Field(() => Super_contest_effectsCount, {nullable:false})
    _count?: Super_contest_effectsCount;
}
