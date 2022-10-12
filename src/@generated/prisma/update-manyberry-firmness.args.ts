import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_firmnessUpdateManyMutationInput } from '../berry-firmness/berry-firmness-update-many-mutation.input';
import { Type } from 'class-transformer';
import { berry_firmnessWhereInput } from '../berry-firmness/berry-firmness-where.input';

@ArgsType()
export class UpdateManyberryFirmnessArgs {

    @Field(() => berry_firmnessUpdateManyMutationInput, {nullable:false})
    @Type(() => berry_firmnessUpdateManyMutationInput)
    data!: berry_firmnessUpdateManyMutationInput;

    @Field(() => berry_firmnessWhereInput, {nullable:true})
    @Type(() => berry_firmnessWhereInput)
    where?: berry_firmnessWhereInput;
}
