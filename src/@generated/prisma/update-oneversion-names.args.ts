import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_namesUpdateInput } from '../version-names/version-names-update.input';
import { Type } from 'class-transformer';
import { version_namesWhereUniqueInput } from '../version-names/version-names-where-unique.input';

@ArgsType()
export class UpdateOneversionNamesArgs {

    @Field(() => version_namesUpdateInput, {nullable:false})
    @Type(() => version_namesUpdateInput)
    data!: version_namesUpdateInput;

    @Field(() => version_namesWhereUniqueInput, {nullable:false})
    @Type(() => version_namesWhereUniqueInput)
    where!: version_namesWhereUniqueInput;
}
