import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_changelogUncheckedUpdateManyInput } from '../ability-changelog/ability-changelog-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { ability_changelogWhereInput } from '../ability-changelog/ability-changelog-where.input';

@ArgsType()
export class UpdateManyabilityChangelogArgs {

    @Field(() => ability_changelogUncheckedUpdateManyInput, {nullable:false})
    @Type(() => ability_changelogUncheckedUpdateManyInput)
    data!: ability_changelogUncheckedUpdateManyInput;

    @Field(() => ability_changelogWhereInput, {nullable:true})
    @Type(() => ability_changelogWhereInput)
    where?: ability_changelogWhereInput;
}
