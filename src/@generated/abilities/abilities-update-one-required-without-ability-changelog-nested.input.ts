import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesCreateWithoutAbility_changelogInput } from './abilities-create-without-ability-changelog.input';
import { Type } from 'class-transformer';
import { abilitiesCreateOrConnectWithoutAbility_changelogInput } from './abilities-create-or-connect-without-ability-changelog.input';
import { abilitiesUpsertWithoutAbility_changelogInput } from './abilities-upsert-without-ability-changelog.input';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { abilitiesUpdateWithoutAbility_changelogInput } from './abilities-update-without-ability-changelog.input';

@InputType()
export class abilitiesUpdateOneRequiredWithoutAbility_changelogNestedInput {

    @Field(() => abilitiesCreateWithoutAbility_changelogInput, {nullable:true})
    @Type(() => abilitiesCreateWithoutAbility_changelogInput)
    create?: abilitiesCreateWithoutAbility_changelogInput;

    @Field(() => abilitiesCreateOrConnectWithoutAbility_changelogInput, {nullable:true})
    @Type(() => abilitiesCreateOrConnectWithoutAbility_changelogInput)
    connectOrCreate?: abilitiesCreateOrConnectWithoutAbility_changelogInput;

    @Field(() => abilitiesUpsertWithoutAbility_changelogInput, {nullable:true})
    @Type(() => abilitiesUpsertWithoutAbility_changelogInput)
    upsert?: abilitiesUpsertWithoutAbility_changelogInput;

    @Field(() => abilitiesWhereUniqueInput, {nullable:true})
    @Type(() => abilitiesWhereUniqueInput)
    connect?: abilitiesWhereUniqueInput;

    @Field(() => abilitiesUpdateWithoutAbility_changelogInput, {nullable:true})
    @Type(() => abilitiesUpdateWithoutAbility_changelogInput)
    update?: abilitiesUpdateWithoutAbility_changelogInput;
}
