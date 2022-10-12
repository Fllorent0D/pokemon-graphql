import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_changelogCreateInput } from '../ability-changelog/ability-changelog-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneabilityChangelogArgs {

    @Field(() => ability_changelogCreateInput, {nullable:false})
    @Type(() => ability_changelogCreateInput)
    data!: ability_changelogCreateInput;
}
