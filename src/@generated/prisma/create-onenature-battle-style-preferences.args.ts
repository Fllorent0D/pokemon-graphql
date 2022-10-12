import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_battle_style_preferencesCreateInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnenatureBattleStylePreferencesArgs {

    @Field(() => nature_battle_style_preferencesCreateInput, {nullable:false})
    @Type(() => nature_battle_style_preferencesCreateInput)
    data!: nature_battle_style_preferencesCreateInput;
}
