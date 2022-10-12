import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_battle_style_preferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';
import { Type } from 'class-transformer';
import { nature_battle_style_preferencesUpdateWithoutNaturesInput } from './nature-battle-style-preferences-update-without-natures.input';

@InputType()
export class nature_battle_style_preferencesUpdateWithWhereUniqueWithoutNaturesInput {

    @Field(() => nature_battle_style_preferencesWhereUniqueInput, {nullable:false})
    @Type(() => nature_battle_style_preferencesWhereUniqueInput)
    where!: nature_battle_style_preferencesWhereUniqueInput;

    @Field(() => nature_battle_style_preferencesUpdateWithoutNaturesInput, {nullable:false})
    @Type(() => nature_battle_style_preferencesUpdateWithoutNaturesInput)
    data!: nature_battle_style_preferencesUpdateWithoutNaturesInput;
}
