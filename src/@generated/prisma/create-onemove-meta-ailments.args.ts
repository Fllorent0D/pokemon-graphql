import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_ailmentsCreateInput } from '../move-meta-ailments/move-meta-ailments-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveMetaAilmentsArgs {

    @Field(() => move_meta_ailmentsCreateInput, {nullable:false})
    @Type(() => move_meta_ailmentsCreateInput)
    data!: move_meta_ailmentsCreateInput;
}
