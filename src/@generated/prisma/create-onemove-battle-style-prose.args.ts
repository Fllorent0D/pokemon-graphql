import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_battle_style_proseCreateInput } from '../move-battle-style-prose/move-battle-style-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveBattleStyleProseArgs {

    @Field(() => move_battle_style_proseCreateInput, {nullable:false})
    @Type(() => move_battle_style_proseCreateInput)
    data!: move_battle_style_proseCreateInput;
}
