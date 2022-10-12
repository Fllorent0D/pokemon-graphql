import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_battle_style_preferencesCreateWithoutNaturesInput } from './nature-battle-style-preferences-create-without-natures.input';
import { Type } from 'class-transformer';
import { nature_battle_style_preferencesCreateOrConnectWithoutNaturesInput } from './nature-battle-style-preferences-create-or-connect-without-natures.input';
import { nature_battle_style_preferencesUpsertWithWhereUniqueWithoutNaturesInput } from './nature-battle-style-preferences-upsert-with-where-unique-without-natures.input';
import { nature_battle_style_preferencesWhereUniqueInput } from './nature-battle-style-preferences-where-unique.input';
import { nature_battle_style_preferencesUpdateWithWhereUniqueWithoutNaturesInput } from './nature-battle-style-preferences-update-with-where-unique-without-natures.input';
import { nature_battle_style_preferencesUpdateManyWithWhereWithoutNaturesInput } from './nature-battle-style-preferences-update-many-with-where-without-natures.input';
import { nature_battle_style_preferencesScalarWhereInput } from './nature-battle-style-preferences-scalar-where.input';

@InputType()
export class nature_battle_style_preferencesUncheckedUpdateManyWithoutNaturesNestedInput {

    @Field(() => [nature_battle_style_preferencesCreateWithoutNaturesInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesCreateWithoutNaturesInput)
    create?: Array<nature_battle_style_preferencesCreateWithoutNaturesInput>;

    @Field(() => [nature_battle_style_preferencesCreateOrConnectWithoutNaturesInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesCreateOrConnectWithoutNaturesInput)
    connectOrCreate?: Array<nature_battle_style_preferencesCreateOrConnectWithoutNaturesInput>;

    @Field(() => [nature_battle_style_preferencesUpsertWithWhereUniqueWithoutNaturesInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesUpsertWithWhereUniqueWithoutNaturesInput)
    upsert?: Array<nature_battle_style_preferencesUpsertWithWhereUniqueWithoutNaturesInput>;

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

    @Field(() => [nature_battle_style_preferencesUpdateWithWhereUniqueWithoutNaturesInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesUpdateWithWhereUniqueWithoutNaturesInput)
    update?: Array<nature_battle_style_preferencesUpdateWithWhereUniqueWithoutNaturesInput>;

    @Field(() => [nature_battle_style_preferencesUpdateManyWithWhereWithoutNaturesInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesUpdateManyWithWhereWithoutNaturesInput)
    updateMany?: Array<nature_battle_style_preferencesUpdateManyWithWhereWithoutNaturesInput>;

    @Field(() => [nature_battle_style_preferencesScalarWhereInput], {nullable:true})
    @Type(() => nature_battle_style_preferencesScalarWhereInput)
    deleteMany?: Array<nature_battle_style_preferencesScalarWhereInput>;
}
