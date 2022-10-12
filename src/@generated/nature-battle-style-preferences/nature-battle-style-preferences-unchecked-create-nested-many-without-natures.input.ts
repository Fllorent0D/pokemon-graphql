import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_battle_style_preferencesCreateWithoutNaturesInput } from './nature-battle-style-preferences-create-without-natures.input';
import { Type } from 'class-transformer';
import { nature_battle_style_preferencesCreateOrConnectWithoutNaturesInput } from './nature-battle-style-preferences-create-or-connect-without-natures.input';
import { nature_battle_style_preferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';

@InputType()
export class nature_battle_style_preferencesUncheckedCreateNestedManyWithoutNaturesInput {

    @Field(() => [nature_battle_style_preferencesCreateWithoutNaturesInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesCreateWithoutNaturesInput)
    create?: Array<nature_battle_style_preferencesCreateWithoutNaturesInput>;

    @Field(() => [nature_battle_style_preferencesCreateOrConnectWithoutNaturesInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesCreateOrConnectWithoutNaturesInput)
    connectOrCreate?: Array<nature_battle_style_preferencesCreateOrConnectWithoutNaturesInput>;

    @Field(() => [nature_battle_style_preferencesWhereUniqueInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesWhereUniqueInput)
    connect?: Array<nature_battle_style_preferencesWhereUniqueInput>;
}
