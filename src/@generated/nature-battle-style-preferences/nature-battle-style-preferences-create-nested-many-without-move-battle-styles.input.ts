import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_battle_style_preferencesCreateWithoutMove_battle_stylesInput } from './nature-battle-style-preferences-create-without-move-battle-styles.input';
import { Type } from 'class-transformer';
import { nature_battle_style_preferencesCreateOrConnectWithoutMove_battle_stylesInput } from './nature-battle-style-preferences-create-or-connect-without-move-battle-styles.input';
import { nature_battle_style_preferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';

@InputType()
export class nature_battle_style_preferencesCreateNestedManyWithoutMove_battle_stylesInput {

    @Field(() => [nature_battle_style_preferencesCreateWithoutMove_battle_stylesInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesCreateWithoutMove_battle_stylesInput)
    create?: Array<nature_battle_style_preferencesCreateWithoutMove_battle_stylesInput>;

    @Field(() => [nature_battle_style_preferencesCreateOrConnectWithoutMove_battle_stylesInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesCreateOrConnectWithoutMove_battle_stylesInput)
    connectOrCreate?: Array<nature_battle_style_preferencesCreateOrConnectWithoutMove_battle_stylesInput>;

    @Field(() => [nature_battle_style_preferencesWhereUniqueInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesWhereUniqueInput)
    connect?: Array<nature_battle_style_preferencesWhereUniqueInput>;
}
