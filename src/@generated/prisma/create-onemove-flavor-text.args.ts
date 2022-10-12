import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flavor_textCreateInput } from '../move-flavor-text/move-flavor-text-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveFlavorTextArgs {

    @Field(() => move_flavor_textCreateInput, {nullable:false})
    @Type(() => move_flavor_textCreateInput)
    data!: move_flavor_textCreateInput;
}
