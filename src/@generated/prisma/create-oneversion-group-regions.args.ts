import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_group_regionsCreateInput } from '../version-group-regions/version-group-regions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneversionGroupRegionsArgs {

    @Field(() => version_group_regionsCreateInput, {nullable:false})
    @Type(() => version_group_regionsCreateInput)
    data!: version_group_regionsCreateInput;
}
