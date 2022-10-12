import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_battle_style_preferencesCreateWithoutMove_battle_stylesInput } from './nature-battle-style-preferences-create-without-move-battle-styles.input';
import { Type } from 'class-transformer';
import { nature_battle_style_preferencesCreateOrConnectWithoutMove_battle_stylesInput } from './nature-battle-style-preferences-create-or-connect-without-move-battle-styles.input';
import { nature_battle_style_preferencesUpsertWithWhereUniqueWithoutMove_battle_stylesInput } from './nature-battle-style-preferences-upsert-with-where-unique-without-move-battle-styles.input';
import { nature_battle_style_preferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';
import { nature_battle_style_preferencesUpdateWithWhereUniqueWithoutMove_battle_stylesInput } from './nature-battle-style-preferences-update-with-where-unique-without-move-battle-styles.input';
import { nature_battle_style_preferencesUpdateManyWithWhereWithoutMove_battle_stylesInput } from './nature-battle-style-preferences-update-many-with-where-without-move-battle-styles.input';
import { nature_battle_style_preferencesScalarWhereInput } from './nature-battle-style-preferences-scalar-where.input';

@InputType()
export class nature_battle_style_preferencesUpdateManyWithoutMove_battle_stylesNestedInput {

    @Field(() => [nature_battle_style_preferencesCreateWithoutMove_battle_stylesInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesCreateWithoutMove_battle_stylesInput)
    create?: Array<nature_battle_style_preferencesCreateWithoutMove_battle_stylesInput>;

    @Field(() => [nature_battle_style_preferencesCreateOrConnectWithoutMove_battle_stylesInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesCreateOrConnectWithoutMove_battle_stylesInput)
    connectOrCreate?: Array<nature_battle_style_preferencesCreateOrConnectWithoutMove_battle_stylesInput>;

    @Field(() => [nature_battle_style_preferencesUpsertWithWhereUniqueWithoutMove_battle_stylesInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesUpsertWithWhereUniqueWithoutMove_battle_stylesInput)
    upsert?: Array<nature_battle_style_preferencesUpsertWithWhereUniqueWithoutMove_battle_stylesInput>;

    @Field(() => [nature_battle_style_preferencesWhereUniqueInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesWhereUniqueInput)
    set?: Array<nature_battle_style_preferencesWhereUniqueInput>;

    @Field(() => [nature_battle_style_preferencesWhereUniqueInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesWhereUniqueInput)
    disconnect?: Array<nature_battle_style_preferencesWhereUniqueInput>;

    @Field(() => [nature_battle_style_preferencesWhereUniqueInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesWhereUniqueInput)
    delete?: Array<nature_battle_style_preferencesWhereUniqueInput>;

    @Field(() => [nature_battle_style_preferencesWhereUniqueInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesWhereUniqueInput)
    connect?: Array<nature_battle_style_preferencesWhereUniqueInput>;

    @Field(() => [nature_battle_style_preferencesUpdateWithWhereUniqueWithoutMove_battle_stylesInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesUpdateWithWhereUniqueWithoutMove_battle_stylesInput)
    update?: Array<nature_battle_style_preferencesUpdateWithWhereUniqueWithoutMove_battle_stylesInput>;

    @Field(() => [nature_battle_style_preferencesUpdateManyWithWhereWithoutMove_battle_stylesInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesUpdateManyWithWhereWithoutMove_battle_stylesInput)
    updateMany?: Array<nature_battle_style_preferencesUpdateManyWithWhereWithoutMove_battle_stylesInput>;

    @Field(() => [nature_battle_style_preferencesScalarWhereInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesScalarWhereInput)
    deleteMany?: Array<nature_battle_style_preferencesScalarWhereInput>;
}
