import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_battle_style_proseInput } from './languages-create-without-move-battle-style-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_battle_style_proseInput } from './languages-create-or-connect-without-move-battle-style-prose.input';
import { languagesUpsertWithoutMove_battle_style_proseInput } from './languages-upsert-without-move-battle-style-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutMove_battle_style_proseInput } from './languages-update-without-move-battle-style-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutMove_battle_style_proseNestedInput {

    @Field(() => languagesCreateWithoutMove_battle_style_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_battle_style_proseInput)
    create?: languagesCreateWithoutMove_battle_style_proseInput;

    @Field(() => languagesCreateOrConnectWithoutMove_battle_style_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_battle_style_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_battle_style_proseInput;

    @Field(() => languagesUpsertWithoutMove_battle_style_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutMove_battle_style_proseInput)
    upsert?: languagesUpsertWithoutMove_battle_style_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutMove_battle_style_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutMove_battle_style_proseInput)
    update?: languagesUpdateWithoutMove_battle_style_proseInput;
}
