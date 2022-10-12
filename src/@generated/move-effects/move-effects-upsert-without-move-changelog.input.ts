import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effectsUpdateWithoutMove_changelogInput } from './move-effects-update-without-move-changelog.input';
import { Type } from 'class-transformer';
import { move_effectsCreateWithoutMove_changelogInput } from './move-effects-create-without-move-changelog.input';

@InputType()
export class move_effectsUpsertWithoutMove_changelogInput {

    @Field(() => move_effectsUpdateWithoutMove_changelogInput, {nullable:false})
    @Type(() => move_effectsUpdateWithoutMove_changelogInput)
    update!: move_effectsUpdateWithoutMove_changelogInput;

    @Field(() => move_effectsCreateWithoutMove_changelogInput, {nullable:false})
    @Type(() => move_effectsCreateWithoutMove_changelogInput)
    create!: move_effectsCreateWithoutMove_changelogInput;
}
