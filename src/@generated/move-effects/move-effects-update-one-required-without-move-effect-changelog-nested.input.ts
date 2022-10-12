import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effectsCreateWithoutMove_effect_changelogInput } from './move-effects-create-without-move-effect-changelog.input';
import { Type } from 'class-transformer';
import { move_effectsCreateOrConnectWithoutMove_effect_changelogInput } from './move-effects-create-or-connect-without-move-effect-changelog.input';
import { move_effectsUpsertWithoutMove_effect_changelogInput } from './move-effects-upsert-without-move-effect-changelog.input';
import { move_effectsWhereUniqueInput } from './move-effects-where-unique.input';
import { move_effectsUpdateWithoutMove_effect_changelogInput } from './move-effects-update-without-move-effect-changelog.input';

@InputType()
export class move_effectsUpdateOneRequiredWithoutMove_effect_changelogNestedInput {

    @Field(() => move_effectsCreateWithoutMove_effect_changelogInput, {nullable:true})
    @Type(() => move_effectsCreateWithoutMove_effect_changelogInput)
    create?: move_effectsCreateWithoutMove_effect_changelogInput;

    @Field(() => move_effectsCreateOrConnectWithoutMove_effect_changelogInput, {nullable:true})
    @Type(() => move_effectsCreateOrConnectWithoutMove_effect_changelogInput)
    connectOrCreate?: move_effectsCreateOrConnectWithoutMove_effect_changelogInput;

    @Field(() => move_effectsUpsertWithoutMove_effect_changelogInput, {nullable:true})
    @Type(() => move_effectsUpsertWithoutMove_effect_changelogInput)
    upsert?: move_effectsUpsertWithoutMove_effect_changelogInput;

    @Field(() => move_effectsWhereUniqueInput, {nullable:true})
    @Type(() => move_effectsWhereUniqueInput)
    connect?: move_effectsWhereUniqueInput;

    @Field(() => move_effectsUpdateWithoutMove_effect_changelogInput, {nullable:true})
    @Type(() => move_effectsUpdateWithoutMove_effect_changelogInput)
    update?: move_effectsUpdateWithoutMove_effect_changelogInput;
}
