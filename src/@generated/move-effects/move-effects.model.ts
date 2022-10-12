import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { move_changelog } from '../move-changelog/move-changelog.model';
import { move_effect_changelog } from '../move-effect-changelog/move-effect-changelog.model';
import { move_effect_prose } from '../move-effect-prose/move-effect-prose.model';
import { moves } from '../moves/moves.model';
import { Move_effectsCount } from '../prisma/move-effects-count.output';

@ObjectType()
export class move_effects {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => [move_changelog], {nullable:true})
    move_changelog?: Array<move_changelog>;

    @Field(() => [move_effect_changelog], {nullable:true})
    move_effect_changelog?: Array<move_effect_changelog>;

    @Field(() => [move_effect_prose], {nullable:true})
    move_effect_prose?: Array<move_effect_prose>;

    @Field(() => [moves], {nullable:true})
    moves?: Array<moves>;

    @Field(() => Move_effectsCount, {nullable:false})
    _count?: Move_effectsCount;
}
