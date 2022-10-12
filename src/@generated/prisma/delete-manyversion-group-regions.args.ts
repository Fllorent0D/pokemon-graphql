import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_group_regionsWhereInput } from '../version-group-regions/version-group-regions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyversionGroupRegionsArgs {

    @Field(() => version_group_regionsWhereInput, {nullable:true})
    @Type(() => version_group_regionsWhereInput)
    where?: version_group_regionsWhereInput;
}
