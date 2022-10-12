import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_battle_style_preferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';
import { Type } from 'class-transformer';
import { nature_battle_style_preferencesCreateWithoutNaturesInput } from './nature-battle-style-preferences-create-without-natures.input';

@InputType()
export class nature_battle_style_preferencesCreateOrConnectWithoutNaturesInput {

    @Field(() => nature_battle_style_preferencesWhereUniqueInput, {nullable:false})
    @Type(() => nature_battle_style_preferencesWhereUniqueInput)
    where!: nature_battle_style_preferencesWhereUniqueInput;

    @Field(() => nature_battle_style_preferencesCreateWithoutNaturesInput, {nullable:false})
    @Type(() => nature_battle_style_preferencesCreateWithoutNaturesInput)
    create!: nature_battle_style_preferencesCreateWithoutNaturesInput;
}
