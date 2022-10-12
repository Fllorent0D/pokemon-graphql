import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_battle_style_preferencesWhereInput } from '../nature-battle-style-preferences/nature-battle-style-preferences-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManynatureBattleStylePreferencesArgs {

    @Field(() => nature_battle_style_preferencesWhereInput, {nullable:true})
    @Type(() => nature_battle_style_preferencesWhereInput)
    where?: nature_battle_style_preferencesWhereInput;
}
