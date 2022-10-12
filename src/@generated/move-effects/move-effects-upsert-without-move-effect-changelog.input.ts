import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effectsUpdateWithoutMove_effect_changelogInput } from './move-effects-update-without-move-effect-changelog.input';
import { Type } from 'class-transformer';
import { move_effectsCreateWithoutMove_effect_changelogInput } from './move-effects-create-without-move-effect-changelog.input';

@InputType()
export class move_effectsUpsertWithoutMove_effect_changelogInput {

    @Field(() => move_effectsUpdateWithoutMove_effect_changelogInput, {nullable:false})
    @Type(() => move_effectsUpdateWithoutMove_effect_changelogInput)
    update!: move_effectsUpdateWithoutMove_effect_changelogInput;

    @Field(() => move_effectsCreateWithoutMove_effect_changelogInput, {nullable:false})
    @Type(() => move_effectsCreateWithoutMove_effect_changelogInput)
    create!: move_effectsCreateWithoutMove_effect_changelogInput;
}
