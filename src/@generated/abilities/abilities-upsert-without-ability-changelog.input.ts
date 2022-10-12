import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesUpdateWithoutAbility_changelogInput } from './abilities-update-without-ability-changelog.input';
import { Type } from 'class-transformer';
import { abilitiesCreateWithoutAbility_changelogInput } from './abilities-create-without-ability-changelog.input';

@InputType()
export class abilitiesUpsertWithoutAbility_changelogInput {

    @Field(() => abilitiesUpdateWithoutAbility_changelogInput, {nullable:false})
    @Type(() => abilitiesUpdateWithoutAbility_changelogInput)
    update!: abilitiesUpdateWithoutAbility_changelogInput;

    @Field(() => abilitiesCreateWithoutAbility_changelogInput, {nullable:false})
    @Type(() => abilitiesCreateWithoutAbility_changelogInput)
    create!: abilitiesCreateWithoutAbility_changelogInput;
}
