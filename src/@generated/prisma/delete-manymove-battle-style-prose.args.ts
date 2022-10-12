import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_battle_style_proseWhereInput } from '../move-battle-style-prose/move-battle-style-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveBattleStyleProseArgs {

    @Field(() => move_battle_style_proseWhereInput, {nullable:true})
    @Type(() => move_battle_style_proseWhereInput)
    where?: move_battle_style_proseWhereInput;
}
