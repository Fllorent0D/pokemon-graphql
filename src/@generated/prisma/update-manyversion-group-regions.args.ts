import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_group_regionsUncheckedUpdateManyInput } from '../version-group-regions/version-group-regions-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { version_group_regionsWhereInput } from '../version-group-regions/version-group-regions-where.input';

@ArgsType()
export class UpdateManyversionGroupRegionsArgs {

    @Field(() => version_group_regionsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => version_group_regionsUncheckedUpdateManyInput)
    data!: version_group_regionsUncheckedUpdateManyInput;

    @Field(() => version_group_regionsWhereInput, {nullable:true})
    @Type(() => version_group_regionsWhereInput)
    where?: version_group_regionsWhereInput;
}
